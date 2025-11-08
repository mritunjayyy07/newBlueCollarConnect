
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearAllUpdateProfileErrors, updateProfile } from "../store/slices/updateProfileSlice";
import { getUser } from "../store/slices/userSlice";

const UpdateProfile = () => {
  const { user } = useSelector((state) => state.user);
  const { loading, error, isUpdated } = useSelector((state) => state.updateProfile);

  const dispatch = useDispatch();

  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phone, setPhone] = useState(user && user.phone);
  const [address, setAddress] = useState(user && user.address);
  const [experience, setExperience] = useState(user && user.experience);
  const [firstSkill, setFirstSkill] = useState(user && user.niches?.firstNiche);
  const [secondSkill, setSecondSkill] = useState(user && user.niches?.secondNiche);
  const [thirdSkill, setThirdSkill] = useState(user && user.niches?.thirdNiche);

  const handleUpdateProfile = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);

    if (user && user.role === "Worker") {
      formData.append("firstNiche", firstSkill);
      formData.append("secondNiche", secondSkill);
      formData.append("thirdNiche", thirdSkill);
      formData.append("experience", experience);
    }

    dispatch(updateProfile(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUpdateProfileErrors());
    }
    if (isUpdated) {
      toast.success("Profile updated successfully.");
      dispatch(getUser());
      dispatch(clearAllUpdateProfileErrors());
    }
  }, [dispatch, error, isUpdated, user]);

  const skillsArray = [
    "Electrician",
    "Plumber",
    "Carpenter",
    "Welder",
    "Painter",
    "Mason",
    "Driver",
    "Mechanic",
    "House Cleaner",
    "Gardener",
    "Tailor",
    "AC Technician",
    "Security Guard",
    "Cook",
    "Barber",
    "Construction Worker",
    "Helper",
    "Delivery Boy",
    "Fabricator",
    "Pest Control Technician",
  ];

  return (
    <div className="account_components">
      <h3>Update Worker Profile</h3>

      <div>
        <label>Full Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label>Email Address</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div>
        <label>Phone Number</label>
        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>

      <div>
        <label>Address</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>

      {user && user.role === "Worker" && (
        <>
          <div>
            <label>My Skills</label>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <select value={firstSkill} onChange={(e) => setFirstSkill(e.target.value)}>
                {skillsArray.map((element, index) => (
                  <option value={element} key={index}>
                    {element}
                  </option>
                ))}
              </select>
              <select value={secondSkill} onChange={(e) => setSecondSkill(e.target.value)}>
                {skillsArray.map((element, index) => (
                  <option value={element} key={index}>
                    {element}
                  </option>
                ))}
              </select>
              <select value={thirdSkill} onChange={(e) => setThirdSkill(e.target.value)}>
                {skillsArray.map((element, index) => (
                  <option value={element} key={index}>
                    {element}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label>Experience / Short Bio</label>
            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              rows={5}
              placeholder="Describe your work experience or specialization..."
            />
          </div>
        </>
      )}

      <div className="save_change_btn_wrapper">
        <button className="btn" onClick={handleUpdateProfile} disabled={loading}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;

