import { NextPage } from "next";
import { Card, Col, Row, Tag } from 'antd';
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { CountryType } from "types/models";

const Home: NextPage = () => {
  const router = useRouter();
  const [country, setCountry] = useState<CountryType>();

  useEffect(() => {
    if (router.query.q) {
      axios.get<CountryType>("api/country.get", { params: { q: router.query.q } }).then(({ data }) => {
        setCountry(data);
      }).catch(console.log);
    }
  }, [router.query]);

  console.log(country);

  return (
    <div className={styles.container}>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="Summary" bordered={false}>
            <p>{country?.flag}</p>
            <p>{country?.name.common}</p>
            <p>{country?.timezones[0]}</p>
            <p>{Object.keys(country?.currencies ?? {}).join(", ")}</p>
            <p>{Object.values(country?.languages ?? {}).join(", ")}</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Cost of living" bordered={false}>
            {country?.prices.map((item, i) => {
              return <p key={i} >{item.item_name} <Tag color="purple">${item.avg}</Tag> </p>;
            })}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
