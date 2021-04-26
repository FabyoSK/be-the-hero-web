import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { Feed } from "../../components/Feed";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

import styles from "./list.module.scss";

export default function List({ organization }) {
  return (
    <div className={styles.container}>
      <Header organizationName={organization.name} />
      <Feed />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.params;

  // console.log(slug);

  const { data } = await api.get(`organizations/fsk`);

  // console.log(data);

  return {
    props: {
      organization: data,
    },
    revalidate: 60 * 60 * 24,
  };
};
