// import Link from "next/link";
// import Layout from "../components/Layout";
import { useState } from "react";
import axios from "axios";

function Index() {
  const [label, setLabel] = useState("");
  const [imageData, setImageData] = useState("");

  const apiTestGet = async (path: string) => {
    const settings = {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    };
    const getData = async () => {
      try {
        const response = await fetch(`/api/${path}`, settings);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  };

  const apiTestPost = async (path: string) => {
    const imageDataArray = [
      "data:image/jpeg;base64,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",
    ];
    const dataObject = {
      data: imageDataArray,
    };

    const settings = {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObject),
    };

    const getData = async () => {
      try {
        const response = await fetch(`/api/${path}`, settings);
        const data = await response.json();
        console.log({ data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  };

  const apiTest = async (method: string) => {
    const input = "test";
    const settings = {
      method,
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    };
    const postData = async () => {
      try {
        const res = await fetch("/api/test", settings); // This makes a request to the API route
        const data = await res.json();
        console.log({ data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    postData();
  };

  async function loadedV2(reader) {
    try {
      const apiUrl = "https://hf.space/embed/jph00/pets/+/api/predict/";
      const headers = {
        "Content-Type": "application/json",
        Accept: "*/*",
      };
      const dataObject = {
        data: [reader.result],
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(dataObject),
      });
      console.log({ response });

      // const json = response;
      // const imageLabel =
      //   json?.data?.[0]?.confidences?.[0]?.label || "No label found";
      // setLabel(imageLabel);
      // setImageData(reader.result);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error (e.g., set error state, display error message)
    }
  }

  async function loaded(reader) {
    try {
      const response = await axios.post("/api/test", {
        imageDataArray: [reader.result],
      });

      const json = response.data;
      const imageLabel =
        json?.data?.[0]?.confidences?.[0]?.label || "No label found";
      setLabel(imageLabel);
      setImageData(reader.result);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error (e.g., set error state, display error message)
    }
  }

  function read(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", () => loaded(reader));
      reader.readAsDataURL(file);
    }
  }

  return (
    <div>
      {/* <input id="photo" type="file" onChange={read} /> */}
      <br />

      <br />
      <h2> test 1</h2>
      <button
        className="bg-blue-300 rounded-lg p-1 px-2 mr-2"
        onClick={() => {
          apiTestGet("test-1");
        }}
      >
        get
      </button>

      <hr />
      <h2> test 3</h2>

      <p>https://jsonplaceholder.typicode.com/posts</p>

      <button
        className="bg-blue-300 rounded-lg p-1 px-2 mr-2"
        onClick={() => {
          apiTestGet("test-3");
        }}
      >
        get
      </button>
      <button
        className="bg-blue-300 rounded-lg p-1 px-2 mr-2"
        onClick={() => {
          apiTestPost("test-3");
        }}
      >
        post
      </button>
      <hr />
      <h2> test 4</h2>
      <p>https://hf.space/embed/jph00/pets/+/api/predict/</p>
      <button
        className="bg-blue-300 rounded-lg p-1 px-2 mr-2"
        onClick={() => {
          apiTestPost("test-4");
        }}
      >
        post
      </button>
      <div id="results">
        {imageData && (
          <>
            <br />
            <img src={imageData} width="300" alt="Uploaded" />
            <p>{label}</p>
          </>
        )}
      </div>
      {/* <iframe
        src="https://petershi-hf-dlfc-minimal.hf.space/"
        width="850"
        height="450"
      ></iframe> */}
    </div>
  );
}

export default Index;
