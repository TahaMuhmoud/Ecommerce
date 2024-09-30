import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAddress } from "../hooks/Address/useAddress";
import { Address, GetAdddressReturn } from "../services/addresses";

const AddressSelect = ({
  addresses,
  changeAddress,
}: {
  addresses: Address[];
  changeAddress: Dispatch<SetStateAction<GetAdddressReturn | undefined>>;
}) => {
  const [chossedAddressID, setChossedAddressID] = useState<string>(
    addresses[0]._id
  );

  const { data: choosedAddress, isSuccess } = useAddress(chossedAddressID);
  useEffect(() => {
    if (isSuccess) changeAddress(choosedAddress);
  }, [changeAddress, choosedAddress, isSuccess]);
  return (
    <select
      title="d"
      name="address"
      id=""
      className="text-secondary bg-primary border-none outline-none"
      onChange={(e) => setChossedAddressID(e.target.value)}
    >
      {addresses.map((address, i) => (
        <option key={i} value={address._id}>
          {address.name}
        </option>
      ))}
    </select>
  );
};

export default AddressSelect;
