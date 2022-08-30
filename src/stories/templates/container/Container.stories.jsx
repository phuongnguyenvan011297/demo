import React from "react";
import { Container } from "./Container";

export default {
  title: "Template/Container",
  component: Container,
};

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  productList: [
    {
      id: 1,
      img: "http://placekitten.com/200/200",
      info: "Meo Anh",
      price: "3000$",
    },
    {
      id: 2,
      img: "https://placekitten.com/g/200/200",
      info: "Meo Tay Ban Nha",
      price: "2000$",
    },
  ],
};
