import React from "react";
import useForm from "../utils/useForm";
import validateForm from "../utils/validateForm";

const EventRegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    age: "",
    attendingWithGuest: false,
    guestName: "",
  };

  const { formValues, errors, submittedData, handleChange, handleSubmit } =
    useForm(initialValues, validateForm);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formValues.age}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>

        <div>
          <label>Are you attending with a guest?</label>
          <input
            type="checkbox"
            name="attendingWithGuest"
            checked={formValues.attendingWithGuest}
            onChange={handleChange}
          />
        </div>

        {formValues.attendingWithGuest && (
          <div>
            <label>Guest Name:</label>
            <input
              type="text"
              name="guestName"
              value={formValues.guestName}
              onChange={handleChange}
            />
            {errors.guestName && <p>{errors.guestName}</p>}
          </div>
        )}

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
          <p>
            Attending with Guest:{" "}
            {submittedData.attendingWithGuest ? "Yes" : "No"}
          </p>
          {submittedData.attendingWithGuest && (
            <p>Guest Name: {submittedData.guestName}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default EventRegistrationForm;
