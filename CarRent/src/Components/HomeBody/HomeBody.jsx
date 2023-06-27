import { ScrollView } from "react-native";
import React from "react";
import Brands from "../Brands/Brands";
import Popular from "../PopularCars/Popular";
import Available from "../Available/Available";

const HomeBody = () => {
  return (
    <ScrollView>
      <Brands />
      <Popular />
      <Available />
    </ScrollView>
  );
};

export default HomeBody;
