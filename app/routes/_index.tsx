import * as React from "react";
import type { MetaFunction } from "@remix-run/deno";
import type { LinksFunction } from "@remix-run/deno";
import styles from "../styles/app.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Цифровые сертификаты в образовании" },
    {
      name: "description",
      content:
        "Выдача сертификатов с использованием невзаимозаменяемых токенов NFT",
    },
    {
      property: "og:title",
      content: "Цифровые сертификаты в образовании",
    },
    {
      property: "og:url",
      content: "https://certifychain.deno.dev",
    },
    // {
    //   property: "og:image",
    //   content: "https://smvdoc.ru/maria.jpg",
    // },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:description",
      content:
        "Выдача сертификатов с использованием невзаимозаменяемых токенов NFT",
    },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-4xl">Цифровые сертификаты в образовании</h1>
      <h2>Выдача сертификатов с использованием невзаимозаменяемых токенов NFT</h2>
    </div>
  );
}
