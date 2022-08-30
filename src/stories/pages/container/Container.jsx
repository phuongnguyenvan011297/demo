import React, { useState } from "react";
import PropTypes from "prop-types";
import { Product } from "../../organisms/product/Product";
import { StoryModal } from "../../molecules/storyModal/StoryModal";

export const Container = ({ productList }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [item, setItem] = useState({});
  const showModal = (product) => {
    setIsModalVisible(true);
    setItem(product);
  };
  const handleClose = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="flex">
      {productList.map((product) => {
        return (
          <Product key={product.id}
            onClick={() => showModal(product)}
            url={product.img}
            info={product.info}
            price={product.price}
          />
        );
      })}

      <StoryModal
        label={item.info}
        isOpen={isModalVisible}
        onClose={handleClose}
      >
        <Product url={item.img} info={item.info} price={item.price} />
      </StoryModal>
    </div>
  );
};

Container.propTypes = {
  productList: PropTypes.array,
};
