import { Select } from "antd";

const DropDown = (props: any) => {

    const {setCurrentState} = props;
  const { Option } = Select;
  const cities = [
    { code: "NY", name: "New York", country: "US" },
    { code: "LA", name: "Los Angeles", country: "US" },
    { code: "TO", name: "Toronto", country: "CA" },
    { code: "LD", name: "London", country: "GB" },
    { code: "SY", name: "Sydney", country: "AU" },
    { code: "FR", name: "Frankfurt", country: "DE" },
    { code: "PA", name: "Paris", country: "FR" },
    // Add more cities as needed
  ];
  return (
    <>
      <Select onChange={(e: any) => setCurrentState(e)}>
        {cities?.map((item: any) => {
          return <Option key={item?.code}  value={item?.name}>{item?.name}</Option>;
        })}
      </Select>
    </>
  );
};

export default DropDown;
