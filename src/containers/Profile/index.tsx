import React, { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { compose } from "redux";
import _ from "lodash";
import { rootState, dispatchType } from "store";
import { fetchProfile, updateProfile } from "actions/profileActions";
import profileSchema from "schemas/profile";

const Profile: React.FC<Props> = (props) => {
  const user = localStorage.getItem("user");
  const { dispatch, profile: _profile, updateProfileLoading } = props;

  useEffect(() => {
    dispatch(fetchProfile(user));
  }, []);

  useEffect(() => {
    setUsername(_profile?.username);
    setInformation(_profile?.information);
    setPhotoName(_profile?.photo);
  }, [_profile]);

  const [username, setUsername] = useState<string | any>(
    _profile?.username || ""
  );

  const [information, setInformation] = useState<string | any>(
    _profile?.information || ""
  );

  const userId = localStorage.getItem("user") || "";

  const [editMode, setEditMode] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>({});
  const [photo, setPhoto] = useState<File | any>();
  const [photoName, setPhotoName] = useState<string | any>("Choose file");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  const handleInfoChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInformation(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPhoto(_.first(e?.target?.files));
    setPhotoName(_.first(e?.target?.files)?.name);
  };

  const handleClick = (): void => {
    const result = profileSchema.validate(
      { username, information },
      { abortEarly: false }
    );
    if (result.error) {
      const groupedErrors = _.groupBy(result.error.details, (f) => f.path[0]);
      const newErrors = _.mapValues(groupedErrors, (e) => e[0].message);
      setErrors(newErrors);
    } else {
      const formData = new FormData();
      formData.append("photo", photo);
      formData.append("_id", userId);
      formData.append("username", username);
      formData.append("information", information);
      dispatch(updateProfile(formData));
      setEditMode(false);
      setErrors({ username: "", information: "" });
    }
  };

  return (
    <div className="container profile-container">
      {!editMode && _profile && (
        <>
          <div>
            <img
              src={_profile.photo}
              width="150"
              alt="User"
              className="img-thumbnail"
            />
          </div>
          <div className="ml-4">
            <h3 className="display-4">{_profile.username}</h3>
            <hr className="my-3"></hr>
            <p>
              <strong>Email:</strong> {_profile?.email}
            </p>
            <p>
              <strong>Information:</strong> {_profile.information}
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </button>
          </div>
        </>
      )}
      {editMode && (
        <div className="col-10">
          {/* <form> */}
          <div className="form-group row">
            <label htmlFor="username" className="col-2 col-form-label">
              Username
            </label>
            <div className="col-10">
              <input
                type="text"
                className={`form-control ${
                  errors.information ? "is-invalid" : ""
                }`}
                id="username"
                name="username"
                value={username}
                onChange={(e) => handleNameChange(e)}
              />
              {errors.username && (
                <small className="form-text text-danger">
                  {errors.username}
                </small>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="photo" className="col-2 col-form-label">
              Photo
            </label>
            <div className="col-10">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e)}
                />
                <label className="custom-file-label" htmlFor="photo">
                  {photoName}
                </label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="username" className="col-2 col-form-label">
              Information
            </label>
            <div className="col-10">
              <textarea
                className={`form-control ${
                  errors.information ? "is-invalid" : ""
                }`}
                rows={3}
                name="information"
                value={information}
                onChange={(e) => handleInfoChange(e)}
              ></textarea>
              {errors.information && (
                <small className="form-text text-danger">
                  {errors.information}
                </small>
              )}
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary float-right"
            onClick={handleClick}
          >
            {updateProfileLoading ? (
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Update"
            )}
          </button>
          {/* </form> */}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: rootState) => ({
  profile: state.profile.user,
  fetchProfileLoading: state.profile.fetchProfileLoading,
  fetchProfileError: state.profile.fetchProfileError,
  updateProfileLoading: state.profile.updateProfileLoading,
});

function mapDispatchToProps(dispatch: dispatchType) {
  return {
    dispatch,
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {};

export default compose(connector)(Profile);
