import Cover from "../../shared/Cover/Cover";
import image from "../../../assets/home/chef-service.jpg";

const Desserts = () => {
  return (
    <div>
      <Cover
        image={image}
        title={"DESSERTS"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
    </div>
  );
};

export default Desserts;
