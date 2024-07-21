"use client";

import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import styles from "../Banner/banner.module.css";
import reuniaomesa from "../../../public/reuniaomesa.png";
import pessoa from "../../../public/pessoa.png";
import whatsapp from "../../../public/whatsapp.png";
import parc1 from "../../../public/porc1.png";
import parc2 from "../../../public/porc2.png";
import parc3 from "../../../public/porc3.png";
import banner3 from "../../../public/banner3.png";
import casa from "../../../public/loremipsumcasa.png";
import tel from "../../../public/loremipsumtel.png";
import livro from "../../../public/loremipsumlivro.png";
import imagebanner from "../../../public/imageloremipsum.png";
import gsagrande from "../../../public/gsagrande.png";
import trofeu from "../../../public/trofeu.png";
import quadradomaior from "../../../public/quadradomaior.png";
import quadradomenor from "../../../public/quadradomenor.png";
import gsatransparente from "../../../public/gsatransparente.png";
import linearbranco from "../../../public/linearbranco.png";
import quadradobanner from "../../../public/quadradobanner.png";
import reuniaoresponsiva from "../../../public/reuniaoresponsive.png";
import pessoaresponsive from "../../../public/pessoaresponsiva.png";
import parcresponsive from "../../../public/grupoparc.png";
import bannerresponsive from "../../../public/banner2responsive.png";
import genteresponsivo from "../../../public/genteresponsivo.png";
import Script from "next/script";

export function BannerSec() {
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

  const bannersec = {
    titlesec: "Fale com quem entende",
    subsec:
      "Entender a necessidade dos nossos clientes, buscar a solução e gerar resultados. Assim construímos nossos relacionamentos.",
    imagesec: pessoa,
    Button: {},
    num1: "7O",
    soma: "+",
    num2: "4OO",
    num3: "1O",
    subt: "ativos",
    subt2: "espaços alugados",
    subt3: "empreendimentos administrados",
    subt4: "anos de mercado",
    quadradobanner: quadradobanner,
  };

  const parcerias = {
    titleterc: "NOSSOS PARCEIROS DE CONFIANÇA",
    parc1: parc1,
    parc2: parc2,
    parc3: parc3,
  };

  const bannertres = {
    titlefor: "NOSSOS PROCESSOS",
    titlefive: "Lorem Ipsum is simply dummy text of the",
    subt5:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whe",
    subttrof:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
    imagecasa: casa,
    imagetel: tel,
    imagelivro: livro,
    imagebanner: imagebanner,
    imagegsagrande: gsagrande,
    imagebackg: banner3,
    trofeu: trofeu,
  };

  return (
    <section className="max-w-1440">
      <section>
        <center className="z-30 relative">
          <h1
            className={`fixed ${
              windowWidth <= 393
                ? "max-w-[298px] h-[140px] font-visby text-[32px] leading-[35.3px] font-semibold fixed mt-[20px] ml-[50px]"
                : "w-714 h-[92px] text-[42px] font-visby font-800 leading-[46.2px] fixed ml-[363px] mt-[39px]"
            } z-30`}
          >
            Temos opções certas exclusivas
            <br />
            para todo tipo de negócio.
          </h1>
          <Image
            className={` ${
              windowWidth <= 393
                ? "fixed mt-[199px] ml-[55px]"
                : "fixed ml-[583px] mt-[163px]"
            }`}
            src={whatsapp}
            alt=""
          ></Image>
          {windowWidth > 393 ? (
            <Image
              className="w-1194 h-[250px] left-[0.5px] rounded-lg mt-[80px] max-w-[1194px]"
              src={reuniaomesa}
              alt=""
              quality={100}
              sizes="1000vw"
              style={{
                objectFit: "cover",
              }}
            ></Image>
          ) : (
            <Image
              className="z-1 mt-[60px]"
              src={reuniaoresponsiva}
              alt=""
              width={0}
              height={0}
            ></Image>
          )}
        </center>
      </section>
      <div>
        {windowWidth > 393 ? (
          <Image
            className="fixed z-30 mt-[84px]"
            src={bannersec.imagesec}
            alt=""
          ></Image>
        ) : (
          <Image
            className="mt-[290px] fixed z-30"
            src={pessoaresponsive}
            alt=""
          ></Image>
        )}
      </div>
      <section className="bg-white max-w-1440 h-[668px] mt-[111px] z-10 relative">
        <div>
          <h1
            className={`fixed ${
              windowWidth <= 393
                ? "max-w-[360px] h-[70px] text-black z-10 fixed font-semibold text-[32px] font-visby leading-[35.2px] text-center ml-[18px] mt-[27px]"
                : "text-black z-10 w-588 h-[55px] text-[50px] font-visby font-semibold leading-[55px] text-left ml-[680px] fixed mt-[108px]"
            } z-30`}
          >
            {bannersec.titlesec}
          </h1>
          <p
            className={`fixed ${
              windowWidth <= 393
                ? "text-black z-10 fixed max-w-[361px] h-[59px] text-[16px] font-din font-500 leading-[17.6px] text-center ml-[18px] mt-[105px]"
                : "text-black z-10 max-w-[530px] h-[41px] text-[13px] font-din font-500 leading-[17.6px] text-center ml-[700px] fixed mt-[173px]"
            } z-30`}
          >
            {bannersec.subsec}
          </p>
          <ul className="flex flex-col">
            <li>
              <h1
                className={`fixed ${
                  windowWidth <= 393
                    ? "text-[60px] font-700 leading-[66px] text-left text-[#219c6f] ml-[257px] mt-[380px] font-visby fixed z-50"
                    : "text-[80px] font-300 font-visby leading-[88px] text-left fixed z-50 ml-[680px] mt-[278px] text-[#219c6f]"
                } z-30`}
              >
                {bannersec.num1}
              </h1>
              <h1
                className={`fixed ${
                  windowWidth <= 393
                    ? "text-[40px] leading-[44px] font-300 ml-[229px] mt-[390px] fixed z-50 text-[#219c6f]"
                    : "text-[40px] font-light leading-[44px] text-left fixed z-50 ml-[651.5px] mt-[300px] text-[#219c6f]"
                } z-30`}
              >
                {bannersec.soma}
              </h1>
              <p
                className={`fixed ${
                  windowWidth <= 393
                    ? "text-black text-[16px] font-normal leading-[17.6px] text-left mt-[440px] ml-[229px] fixed z-50 opacity-[80%]"
                    : "text-black text-[18px] font-normal leading-[19.8px] text-left mt-[330px] ml-[795.5px] fixed z-50"
                } z-30`}
              >
                {bannersec.subt}
              </p>
            </li>
            <li>
              <h1
                className={`fixed ${
                  windowWidth <= 393
                    ? "text-[60px] font-700 leading-[66px] text-left text-[#219c6f] ml-[257px] mt-[470px] font-visby fixed z-50"
                    : "text-[80px] font-300 font-visby leading-[88px] text-left fixed z-50 ml-[680px] mt-[398px] text-[#219c6f]"
                } z-30`}
              >
                {bannersec.num1}
              </h1>
              <h1
                className={`fixed ${
                  windowWidth <= 393
                    ? "text-[40px] leading-[44px] font-300 ml-[229px] mt-[485px] fixed z-50 text-[#219c6f]"
                    : "text-[40px] font-light leading-[44px] text-left fixed z-50 ml-[651.5px] mt-[420px] text-[#219c6f]"
                } z-30`}
              >
                {bannersec.soma}
              </h1>
              <p
                className={`fixed ${
                  windowWidth <= 393
                    ? "text-black text-[16px] font-normal leading-[17.6px] text-left mt-[530px] ml-[229px] fixed z-50 opacity-[80%]"
                    : "text-black max-w-[173.33px] h-[40px] opacity-[0.8px] text-[18px] font-normal leading-[19.8px] text-left fixed z-50 ml-[795.5px] mt-[430px]"
                } z-30`}
              >
                {bannersec.subt3}
              </p>
            </li>
          </ul>
          <ul className="flex flex-col">
            <li>
              <h1
                className={`fixed ${
                  windowWidth <= 393
                    ? "text-[60px] font-700 leading-[66px] text-left text-[#219c6f] mt-[270px] ml-[257px] font-visby fixed z-50"
                    : "text-[80px] font-300 font-visby leading-[88px] text-left fixed z-50 ml-[1040px] mt-[278px] text-[#219c6f]"
                } z-30`}
              >
                {bannersec.num2}
              </h1>
              <h1
                className={`fixed ${
                  windowWidth <= 393
                    ? "text-[40px] leading-[44px] font-300 ml-[229px] mt-[285px] fixed z-50 text-[#219c6f]"
                    : "text-[40px] font-light leading-[44px] text-left fixed z-50 ml-[1006.5px] mt-[300px] text-[#219c6f]"
                } z-30`}
              >
                {bannersec.soma}
              </h1>
              <p
                className={`fixed ${
                  windowWidth <= 393
                    ? "text-black max-w-[69px] font-din font-400 text-[16px] leading-[17.6px] fixed z-50 ml-[229px] mt-[330px] opacity-[80%]"
                    : "text-black max-w-[76px] h-[45px] opacity-[0.8px] text-[18px] font-normal leading-[19.8px] text-left fixed z-50 ml-[1220px] mt-[310px]"
                } z-30`}
              >
                {bannersec.subt2}
              </p>
            </li>
            <li>
              <h1
                className={`fixed ${
                  windowWidth <= 393
                    ? "text-[60px] leading-[66px] font-700 ml-[257px] mt-[570px] fixed z-50 text-[#219c6f]"
                    : "text-[80px] font-300 font-visby leading-[88px] text-left fixed z-50 ml-[1040px] mt-[398px] text-[#219c6f]"
                } z-30`}
              >
                {bannersec.num3}
              </h1>
              <h1
                className={`fixed ${
                  windowWidth <= 393
                    ? "text-[40px] leading-[44px] font-300 ml-[229px] mt-[582px] fixed z-50 text-[#219c6f]"
                    : "text-[40px] font-light leading-[44px] text-left fixed z-50 ml-[1006.5px] mt-[420px] text-[#219c6f]"
                } z-30`}
              >
                {bannersec.soma}
              </h1>
              <p
                className={`fixed ${
                  windowWidth <= 393
                    ? "text-black font-normal z-50 fixed ml-[229px] mt-[630px] max-w-[83px] h-[41px] font-normal opacity-[80%] text-left leading-[17.6px] text-[16px]"
                    : "text-black max-w-[74px] h-[45px] opacity-[0.8px] text-[18px] font-normal leading-[19.8px] text-left fixed z-50 ml-[1160px] mt-[434px]"
                } z-30`}
              >
                {bannersec.subt4}
              </p>
            </li>
          </ul>
          <Image
            className={`fixed ${
              windowWidth <= 393
                ? "ml-[61px] mt-[175px] fixed z-50"
                : "fixed z-50 mt-[518px] ml-[824.5px]"
            } z-30`}
            src={whatsapp}
            alt=""
          ></Image>
        </div>
      </section>
      <section>
        <div className="">
          <h1
            className={` ${
              windowWidth <= 393
                ? "mt-[60px] ml-[80px] max-w-[230px] text-center h-[49px] text-[#94a3b8] font-bold text-[20px] leading-[22px]"
                : "w-352 h-[22px] text-[20px] font-black leading-[22px] mt-[60px] text-center text-[#94a3b8]"
            } z-30`}
          >
            {parcerias.titleterc}
          </h1>
          <Image
            className={` ${
              windowWidth <= 393
                ? "opacity-0 z-1 fixed"
                : "mt-[60px] ml-[249.87px]"
            } z-30`}
            src={parcerias.parc1}
            alt=""
          ></Image>
          <Image
            className={` ${
              windowWidth <= 393
                ? "opacity-0 z-1 fixed"
                : "mt-[40px] ml-[201.46px]"
            } z-30`}
            src={parcerias.parc2}
            alt=""
          ></Image>
          <Image
            className={` ${
              windowWidth <= 393
                ? "opacity-0 z-1 fixed"
                : "mt-[40px] ml-[162.75px]"
            } z-30`}
            src={parcerias.parc3}
            alt=""
          ></Image>
          <Image
            className={` ${
              windowWidth <= 393
                ? "z-50 mt-[40px] ml-[44.7px]"
                : "opacity-0 z-1 fixed"
            } z-30`}
            src={parcresponsive}
            alt=""
          ></Image>
        </div>
      </section>
      <section>
        <div>
          <ul>
            <h1
              className={` ${
                windowWidth <= 393
                  ? "z-50 fixed mt-[90px] ml-[17px] font-visby font-bold text-[16px] leading-[17.6px]"
                  : "w-494 h-[26px] text-[24px] font-extrabold leading-[26.4px] text-left mt-[83.71px] ml-[110px] z-30 fixed"
              } z-30`}
            >
              {bannertres.titlefor}
            </h1>

            <h1
              className={` ${
                windowWidth <= 393
                  ? "z-50 fixed mx-w-[361px] h-[70px] font-visby font-semibold text-[32px] leading-[35.3px] mt-[120px] ml-[17px]"
                  : "max-w-[494px] h-[92px] text-[42px] font-extrabold leading-[46.2px] text-left mt-[125.71px] ml-[110px] z-30 fixed"
              } z-30`}
            >
              {bannertres.titlefive}
            </h1>
            <p
              className={` ${
                windowWidth <= 393
                  ? "z-50 fixed mt-[200px] ml-[17px] max-w-[361px] h-[72px] font-500 text-[16px] leading-[17.6px] text-left"
                  : "max-w-[540px] h-[54px] text-[16px] font-medium leading-[17.6px] text-left mt-[233.71px] ml-[110px] z-30 fixed"
              } z-30`}
            >
              {bannertres.subt5}
            </p>
          </ul>
          <ul>
            <li className="flex-row">
              <Image
                className={` ${
                  windowWidth <= 393
                    ? "z-50 fixed mt-[287px] ml-[17px]"
                    : "max-w-40 h-[40px] mt-[319.71px] ml-[110px] z-30 fixed"
                } z-30`}
                src={bannertres.trofeu}
                alt=""
              ></Image>
              <p
                className={` ${
                  windowWidth <= 393
                    ? "z-50 fixed mt-[280px] ml-[73px] max-w-[305px] h-[54px] text-[16px] font-medium leading-[17.6px]"
                    : "max-w-[438px] h-[36px] text-[16px] font-medium leading-[17.6px] text-left mt-[321.71px] ml-[166px] z-30 fixed"
                } z-30`}
              >
                {bannertres.subttrof}
              </p>
            </li>
            <li className="flex-row">
              <Image
                className={` ${
                  windowWidth <= 393
                    ? "z-50 fixed mt-[357px] ml-[17px]"
                    : "max-w-40 h-[40px] mt-[391.71px] ml-[110px] z-30 fixed"
                } z-30`}
                src={bannertres.trofeu}
                alt=""
              ></Image>

              <p
                className={` ${
                  windowWidth <= 393
                    ? "z-50 fixed mt-[350px] ml-[73px] max-w-[305px] h-[54px] text-[16px] font-medium leading-[17.6px]"
                    : "max-w-[438px] h-[36px] text-[16px] font-medium leading-[17.6px] text-left mt-[393.71px] ml-[166px] z-30 fixed"
                } z-30`}
              >
                {bannertres.subttrof}
              </p>
            </li>
            <li className="flex-row">
              <Image
                className={` ${
                  windowWidth <= 393
                    ? "z-50 fixed mt-[427px] ml-[17px]"
                    : "max-w-40 h-[40px] mt-[463.71px] ml-[110px] z-30 fixed"
                } z-30`}
                src={bannertres.trofeu}
                alt=""
              ></Image>
              <p
                className={` ${
                  windowWidth <= 393
                    ? "z-50 fixed mt-[420px] ml-[73px] max-w-[305px] h-[54px] text-[16px] font-medium leading-[17.6px]"
                    : "max-w-[438px] h-[36px] text-[16px] font-medium leading-[17.6px] text-left mt-[465.71px] ml-[166px] z-30 fixed"
                } z-30`}
              >
                {bannertres.subttrof}
              </p>
            </li>
          </ul>
          <Image
            className={` ${
              windowWidth <= 393
                ? "mt-[510px] ml-[60.5px] z-50 fixed"
                : "mt-[535.71px] ml-[110px] z-30 fixed"
            } z-30`}
            src={whatsapp}
            alt=""
          ></Image>
        </div>
        <Image
          className={` ${
            windowWidth <= 393
              ? "mt-[630px] ml-[135px] z-50 fixed"
              : "w-238 h-[40px] mt-[325.42px] ml-[1187px] z-50 fixed"
          } z-30`}
          src={bannertres.imagetel}
          alt=""
        ></Image>
        <Image
          className={` ${
            windowWidth <= 393
              ? "mt-[821px] ml-[20px] z-50 fixed"
              : "w-238 h-[40px] mt-[107.42px] ml-[701px] z-50 fixed"
          } z-30`}
          src={bannertres.imagecasa}
          alt=""
        ></Image>
        <Image
          className={` ${
            windowWidth <= 393
              ? "mt-[923px] ml-[135px] z-50 fixed"
              : "w-238 h-[40px] mt-[494.42px] ml-[656px] z-50 fixed"
          } z-30`}
          src={bannertres.imagelivro}
          alt=""
        ></Image>
        <Image
          className={` ${
            windowWidth <= 393
              ? "w-[244.13px] h-[128px] mt-[868px] ml-[175px] z-40 fixed"
              : "w-[398.52px] h-[208.95px] mt-[462.51px] ml-[1036px] z-40 fixed"
          } z-30`}
          src={bannertres.imagegsagrande}
          alt=""
        ></Image>
        <Image
          className={` ${
            windowWidth <= 393
              ? "opacity-0 fixed z-1"
              : "w-546 h-[546px] mt-[69.71px] left-[792px] z-10 fixed"
          } z-30`}
          src={bannertres.imagebanner}
          alt=""
        ></Image>
        <Image
          className={` ${
            windowWidth <= 393
              ? "mt-[642px] ml-[20px] z-30 fixed"
              : "opacity-0 fixed z-1"
          } z-30`}
          src={genteresponsivo}
          alt=""
        ></Image>
        {windowWidth > 393 ? (
          <Image
            className="w-1440 h-[668px] z-1 mt-[60px]"
            src={bannertres.imagebackg}
            alt=""
          ></Image>
        ) : (
          <Image
            className="mt-[55.34px] fixed z-1"
            src={bannerresponsive}
            alt=""
          ></Image>
        )}
      </section>
      <div className="max-w-[1,440px] h-[94px]">
        <h2 className="text-black mt-[48px] ml-[80px]">
          @ 2023 GSA, Inc. All rights reserved.
        </h2>
      </div>
    </section>
  );
}
