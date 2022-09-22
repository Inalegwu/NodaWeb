import React, { useEffect, useState } from "react";
import NavItem from "../NavItem/NavItem";
import "./Navigation.css";

interface Data {
  id?: number;
  title?: string;
  content?: string;
}

function Navigation({ info }: any) {
  const [data, setData] = useState<Array<Data>>();
  let information = info;

  useEffect(() => {
    fetch("http://localhost:8080/api/notes/")
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, [data, setData]);

  const search = (searchTerm: string) => {
    fetch(`http://localhost:8080/api/notes/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  };
  const editItem = (item: Object) => {
    information = item;
  };

  return (
    <div className="navigation">
      <>
        <div className="top">
          <h2>All Notes</h2>
          <input
            type="text"
            className="input input-sm"
            placeholder="Search Notes"
            onChange={(e) => {
              search(e.target.value);
            }}
          />
        </div>
        <div className="body">
          {data?.map((item) => {
            return <NavItem key={item.id} onPress={editItem} item={item} />;
          })}
        </div>
      </>
    </div>
  );
}

export default Navigation;
