import moment from "moment";

export const formatdate = (date) => {
  return moment(date).format("LL");
};
