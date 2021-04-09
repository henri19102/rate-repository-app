import React from "react";
import { Button, View } from "react-native";
import FormikTextInput from "../FormikTextInput";
import {myStyles} from "../../styles/myStyles";

const ReviewForm = ({ handleSubmit }) => {
  return (
    <View>
      <FormikTextInput name="ownerName" placeholder="owner name" />
      <FormikTextInput name="repositoryName" placeholder="repository name" />
      <FormikTextInput name="stringRating" placeholder="rating between 0 and 100" keyboardType='numeric' maxLength={3} />
      <FormikTextInput multiline={true} name="text" placeholder="write review" />

      <View style={myStyles.itemPadding}>
        <Button onPress={handleSubmit} title="Submit review"></Button>
      </View>
    </View>
  );
};

export default ReviewForm;
