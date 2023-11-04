import { useState } from "react";
import { API } from "../api/axiosWithAuth";
import Swal from "sweetalert2";

export const REQ_TYPES = Object.freeze({
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
});

export const useAxios = (initialValue = null) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState("");

  const doRequest = ({ endpoint, reqType, payload, config }) => {
    setLoading(true);
    API[reqType](endpoint, payload || config, payload || config)
      .then((res) => {
        console.log(res);
        setData(res.data);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setData(initialValue);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        }).finally(() => setLoading(false));
      });
  };
  return [doRequest, data, loading, error];
};
