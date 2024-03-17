import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://logowik.com/content/uploads/images/royal-enfield6316.jpg"
            alt=""
            style={{width:"150px", objectFit:"cover"}}
          />
        </div>
        <div className="flex items-start">
          <img
src="https://i.pinimg.com/736x/cb/b2/ec/cbb2ec041bd80a0a3ffafb5f6a7ffa77.jpg"
            style={{width:"190px", objectFit:"cover"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="data:image/png;base64,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"
            style={{width:"200px", objectFit:"cover"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Hero_MotoCorp_Logo.svg/2560px-Hero_MotoCorp_Logo.svg.png"
            style={{width:"170px", objectFit:"cover"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://1000logos.net/wp-content/uploads/2020/07/TVS-Motor-Logo.jpg"
            style={{width:"150px", objectFit:"cover"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
