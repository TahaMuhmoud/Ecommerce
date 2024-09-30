import { api } from "./api";

export type Address = {
  name: string;
  details: string;
  phone: string;
  city: string;
  _id: string;
};
type OperationsAddressReturn = {
  status: string;
  message: string;
  data: Address[];
};
export type GetAdddressReturn = {
  status: string;
  message: string;
  data: Address;
};
export const addAddress: (
  token: string,
  address: Address
) => Promise<OperationsAddressReturn> = async (token, address) => {
  const { data } = await api.post(`/addresses`, address, {
    headers: { token },
  });
  return data;
};

// DELETE: remove address
export const removeAddress: (
  token: string,
  addressID: string
) => Promise<OperationsAddressReturn> = async (token, addressID) => {
  const { data } = await api.delete(`/addresses/${addressID}`, {
    headers: { token },
  });
  return data;
};
// GET: get specific address
export const getAddress: (
  token: string,
  addressID: string
) => Promise<GetAdddressReturn> = async (token, addressID) => {
  const { data } = await api.get(`/addresses/${addressID}`, {
    headers: { token },
  });
  return data;
};
// GET: get user addresses
export const getUserAddresses: (
  token: string
) => Promise<OperationsAddressReturn> = async (token) => {
  const { data } = await api.get(`/addresses`, {
    headers: { token },
  });
  return data;
};
