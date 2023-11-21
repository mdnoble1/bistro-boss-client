import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCard from "../../../components/FoodCard/FoodCard";

const Order = ({ menu }) => {
  const [tabIndex, setTabIndex] = useState(0);

  // console.log(menu)

  
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
      className="container mx-auto my-12 lg:my-32"
    >
      <TabList className="text-center uppercase font-medium lg:text-2xl text-black">
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soups</Tab>
        <Tab>Desserts</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {
            desserts.map ( item => <FoodCard 
            key={item._id} 
            item={item}></FoodCard>)
          }
        </div>
      </TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
  );
};

export default Order;
