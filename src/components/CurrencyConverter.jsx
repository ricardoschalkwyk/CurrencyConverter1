import React, { useEffect, useState } from "react";
import CurrencyRow from "./CurrencyRow";

const BASE_URL = "https://api.apilayer.com/exchangerates_data";
const API_KEY = "YdszzfF4MBaXej0cGXignuPAZ2PuJLGF";

let headers = new Headers();
headers.append("apikey", API_KEY);

const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers,
};

const options = ["USD", "ZAR"];

function CurrencyConverter() {
  const [result, setResult] = useState();

  useEffect(() => {
    fetch(BASE_URL + `/convert?to=ZAR&from=USD&amount=25`, requestOptions)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setResult(`${data.result}`);
      });
  }, []);

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow options={options} selected="USD" result="1" />
      <div>=</div>
      <CurrencyRow options={options} selected="ZAR" result={result} />
    </>
  );
}

export default CurrencyConverter;
