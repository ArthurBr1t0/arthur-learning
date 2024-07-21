"use client";

import React, { useState, useEffect } from "react";
import { useId } from "react";
import Image from "next/image";
import styles from "../Banner/banner.module.css";
import gsapicture from "../../../public/gsa.png";
import bannersala from "../../../public/bannersala.jpeg";
import bannerazul from "../../../public/bannerazul.png";
import quadradoverde from "../../../public/quadradoverde.png";
import pessoa from "../../../public/pessoa.png";
import negocio from "../../../public/negocio.png";
import whatsapp from "../../../public/whatsapp.png";
import barra from "../../../public/barra.png";
import parc1 from "../../../public/porc1.png";
import parc2 from "../../../public/porc2.png";
import parc3 from "../../../public/porc3.png";
import banner3 from "../../../public/banner3.png";
import quadverdemenor from "../../../public/quadverdemenor.png";
import bannerresponsivo from "../../../public/bannerresponsivo1.png";

export function Banner() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const content = {
    title: "Os melhores espaços comerciais para o seu",
    subtitle:
      "Espaços cuidadosamente selecionados para atender as necessidades do seu negócio.",
    Button: {},
    background: bannersala,
    image: bannerazul,
    negocio: negocio,
    image3: whatsapp,
    quadrado: quadradoverde,
    soma: "+",
    num1: "7O",
    subt1: "empreendimentos administrados",
    barra: "/",
    num2: "4OO",
    subt2: "espaços alugados",
    responsivo: bannerresponsivo,
  };

  return (
    <section className="w-1440">
      <center className="min-[61.03px]: h-[32px]">
        <Image
          src={gsapicture}
          alt=""
          className="w-84 h-[44.04px] mt-[24px]"
        ></Image>
      </center>

      <section className="max-w-[1440px] h-[800px] mt-[24px] box-border relative">
        <div className="">
          <Image
            src={content.background}
            alt=""
            className={`-1 fixed ${
              windowWidth <= 393
                ? "max-w-[624px] left-597 h-[416px] mt-[0px]"
                : "w-1212 h-[800px] left-[597px]"
            }`}
          />
        </div>
        <h1
          className={`fixed ${
            windowWidth <= 393
              ? "w-361 h-[137px] text-[40px] font-300 leading-[44px] text-left ml-[16px] mt-[365px]"
              : "max-w-[640px] h-[124px] font-visby font-light text-[56px] leading-[61.6px] mt-[143.5px] ml-[110px]"
          } z-30`}
        >
          {content.title}
        </h1>
        <Image
          className={` ${
            windowWidth <= 393
              ? "mt-[508px] ml-[16px] w-[179px] h-[60px] z-40 fixed"
              : "max-w-231 h-[71px] justify-betweent z-40 mt-[273.5px] ml-[110px] fixed"
          }`}
          src={content.negocio}
          alt=""
        ></Image>
        <p
          className={` ${
            windowWidth <= 393
              ? "w-361 h-[44px] text-[16px] font-400 leading[22.4px] text-left ml-[16px] mt-[592px] fixed"
              : "max-w-[680px] h-[68px] font-normal text-[24px] leading-[33.6px] mt-[368px] ml-[110px] fixed"
          } z-20`}
        >
          {content.subtitle}
        </p>
        <Image
          className={` ${
            windowWidth <= 393
              ? "w-274 h-[48px] gap-[8px] mt-[668px] ml-[16px] fixed z-40"
              : "max-w-278 h-[48px] gap-[8px] z-50 mt-[478px] ml-[110px] fixed"
          }`}
          src={content.image3}
          alt=""
        ></Image>
        <div className={styles.numeros}>
          <ul className="flex flex-col">
            <li>
              <h1
                className={` ${
                  windowWidth <= 393
                    ? "w-[106px] h-[66px] text-[80px] font-300 font-visby leading-[88px] text-left mt-[756px] ml-[45px] z-50 fixed"
                    : "text-[80px] font-300 font-visby leading-[88px] text-left fixed z-50 ml-[140px] mt-[624px]"
                } z-20`}
              >
                {content.num1}
              </h1>
              <h1
                className={` ${
                  windowWidth <= 393
                    ? "text-[40px] font-300 leading-[44px] font-[visby] text-left fixed z-50 text-green-500 mt-[774px] ml-[16px]"
                    : "text-[40px] font-300 leading-[44px] font-[visby] text-left fixed z-50 ml-[110px] mt-[650px] text-green-500"
                } z-20`}
              >
                {content.soma}
              </h1>
              <p
                className={` ${
                  windowWidth <= 393
                    ? "max-w-[121px] h-[30px] mt-[840px] ml-[16px] opacity-[0.8px] text-[18px] font-normal leading-[19.8px] text-left fixed z-50"
                    : "max-w-[173.33px] h-[40px] opacity-[0.8px] text-[18px] font-normal leading-[19.8px] text-left fixed z-50 mt-[715px] ml-[110px]"
                } z-20`}
              >
                {content.subt1}
              </p>
            </li>
          </ul>
          <ul className="flex flex-col">
            <li>
              <Image
                className={` ${
                  windowWidth <= 393
                    ? "mt-[756px] ml-[155px] z-50 fixed"
                    : "max-w-[150.36px] fixed z-50 ml-[291.33px] mt-[620px]"
                }`}
                src={barra}
                alt=""
              ></Image>
            </li>
          </ul>
          <ul>
            <li>
              <h1
                className={` ${
                  windowWidth <= 393
                    ? "text-[80px] font-300 font-visby leading-[88px] text-left fixed z-50 ml-[230px] mt-[756px]"
                    : "text-[80px] font-300 font-visby leading-[88px] text-left fixed z-50 ml-[410.33px] mt-[624px]"
                } z-20`}
              >
                {content.num2}
              </h1>
              <h1
                className={` ${
                  windowWidth <= 393
                    ? "text-[40px] font-300 leading-[44px] font-[visby] text-left fixed z-50 text-green-500 mt-[774px] ml-[210px]"
                    : "text-[40px] font-300 leading-[44px] font-[visby] text-left fixed z-50 ml-[371.33px] mt-[650px] text-green-500"
                } z-20`}
              >
                {content.soma}
              </h1>
              <p
                className={` ${
                  windowWidth <= 393
                    ? "max-w-[190px] h-[15px] mt-[840px] ml-[210px] opacity-[0.8px] text-[18px] font-400 leading-[19.8px] text-left fixed z-50"
                    : "max-w-[173.33px] h-[20px] opacity-[0.8px] text-[18px] font-400 leading-[19.8px] text-left fixed z-50 mt-[715px] ml-[371.33px]"
                } z-20`}
              >
                {content.subt2}
              </p>
            </li>
          </ul>
        </div>
        <Image
          src={quadradoverde}
          alt=""
          className={` ${
            windowWidth <= 393
              ? "fixed z-30"
              : "mt-[40px] ml-[820px] fixed z-20"
          } z-20`}
          width={142.23}
          height={142.23}
        />
        <Image
          className={` ${
            windowWidth <= 393
              ? "mt-[274.5px] ml-[309px] fixed z-30"
              : "opacity-0 fixed z-1"
          } z-20`}
          src={quadverdemenor}
          alt=""
        ></Image>
        {windowWidth > 393 ? (
          <Image
            src={content.image}
            alt=""
            className="z-10 w-[940px] h-[800px] fixed"
            width={0}
            height={0}
          />
        ) : (
          <Image
            src={content.responsivo}
            alt=""
            className="z-10 fixed"
            width={0}
            height={0}
          />
        )}
      </section>
    </section>
  );
}
