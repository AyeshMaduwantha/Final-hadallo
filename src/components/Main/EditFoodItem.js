import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

let EditFoodItem = props => {
  console.log(props, "fbg");
  
  const { handleSubmit, load, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
       
        <button  type="button" disabled={pristine || submitting} onClick={reset}>
          Remove
        </button>
      </div>
    </form>
  );
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
EditFoodItem = reduxForm({
  form: "EditFoodItem" // a unique identifier for this form
})(EditFoodItem);

// You have to connect() to any reducers that you wish to connect to yourself
EditFoodItem = connect(state => ({
  initialValues: state.foodItems // pull initial values from account reducer
}))(EditFoodItem);

export default EditFoodItem;
