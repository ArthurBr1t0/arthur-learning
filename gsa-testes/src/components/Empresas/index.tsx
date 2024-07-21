"use client";

import { useEffect } from "react";
import React, { useState } from "react";
import Image from "next/image";
import style from "../Empresas/index.module.css";
import BHM2550 from "../../../public/BHM2550.jpeg";
import BTred from "../../../public/businesstowerred.jpeg";
import BTretangular from "../../../public/businesstowerretangular.jpeg";
import Prisma from "../../../public/Prisma.jpeg";
import edhorizonte from "../../../public/edhorizonte.png";
import parqueavenida from "../../../public/parqueavenida.png";
import BTazul from "../../../public/businesstowerazul.png";
import Mirante from "../../../public/ed.mirante.png";
import BTpiramide from "../../../public/businesstowerpiramide.png";
import BTcinza from "../../../public/businesstowercinza.png";
import localidade from "../../../public/localidade.png";
import linearbranco from "../../../public/linearbranco.png";
import quadradoverde from "../../../public/quadradoverde.png";
import gsatransparente from "../../../public/gsatransparente.png";
import quadradomaior from "../../../public/quadradomaior.png";
import quadradomenor from "../../../public/quadradomenor.png";
import card1 from "../../../public/card1.png";
import card2 from "../../../public/card2.png";
import card3 from "../../../public/card3.png";
import card4 from "../../../public/card4.png";
import card5 from "../../../public/card5.png";
import card6 from "../../../public/card6.png";

export function Empresas() {
  const ScrollableList = ({ items }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };

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

    return (
      <section className="max-w-1440">
        <section>
          <div className="h-[86px] gap-[40px] mt-[80px]">
            <h1
              className={` ${
                windowWidth <= 393
                  ? "w-316 h-[105px] text-black font-visby text-[32px] font-semibold leading-[35.2px] text-center mt-[80px] fixed"
                  : "text-black w-1280 font-visby h-[44px] text-[40px] font-extrabold leading-[44px] text-center"
              } `}
            >
              Temos as melhores opções para o seu negócio
            </h1>
            <p
              className={` ${
                windowWidth <= 393
                  ? "text-black font-normal text-center w-361 h-[44px] mt-[200px] text-[16px] leading-[22.4px] fixed"
                  : "text-black w-1280 h-[34px] text-[24px] font-normal leading-[33.6px] text-center"
              } `}
            >
              Espaços cuidadosamente selecionados para atender as necessidades
              do seu negócio.
            </p>
          </div>
          <section
            className={`transition-all duration-300 ${
              isExpanded
                ? "h-auto overflow-visible"
                : "h-[950px] overflow-hidden"
            }`}
          >
            {!isExpanded && (
              <div>
                <Image
                  className={` ${
                    windowWidth <= 393
                      ? "z-1 fixed opacity-0"
                      : "z-30 fixed mt-[803px] ml-[117px]"
                  } `}
                  src={linearbranco}
                  alt=""
                />
              </div>
            )}

            <div className="flex-row">
              <Image
                className={`fixed ${
                  windowWidth <= 393
                    ? "z-1 fixed opacity-0"
                    : "ml-[1156.87px] z-1 fixed"
                } `}
                src={quadradomenor}
                alt=""
              ></Image>
              <div>
                <Image
                  className={`fixed ${
                    windowWidth <= 393
                      ? "z-1 fixed opacity-0"
                      : "mt-[820px] z-1 fixed"
                  } `}
                  src={quadradomaior}
                  alt=""
                ></Image>
                <Image
                  className={`fixed ${
                    windowWidth <= 393
                      ? "z-1 fixed opacity-0"
                      : "mt-[840px] ml-[1233.64px] z-1 fixed"
                  } `}
                  src={gsatransparente}
                  alt=""
                ></Image>
              </div>
            </div>
            <div className={style.content}>
              <ul className="flex flex-col gap-[32px] mt-[120px]">
                <li className="w-[378px] relative h-[360px]">
                  {windowWidth > 393 ? (
                    <Image
                      src={BHM2550}
                      alt=""
                      fill
                      quality={100}
                      sizes="100vw"
                      className={` fixed ${
                        windowWidth <= 393
                          ? "opacity-0 fixed z-1"
                          : "rounded-lg"
                      } `}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Image className="ml-[-100px]" src={card5} alt=""></Image>
                  )}
                  <h1
                    className={` ${
                      windowWidth <= 393
                        ? "opacity-0 fixed z-1"
                        : "w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left box-border fixed mt-[260px] ml-[16px]"
                    } `}
                  >
                    BHM 2550
                  </h1>

                  <Image
                    className={` ${
                      windowWidth <= 393
                        ? "opacity-0 z-1 fixed"
                        : "w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px]"
                    } `}
                    src={localidade}
                    alt=""
                  ></Image>
                </li>
                <li className="w-[378px] relative h-[360px]">
                  {windowWidth > 393 ? (
                    <Image
                      src={BTred}
                      alt=""
                      fill
                      quality={100}
                      sizes="100vw"
                      className={` fixed ${
                        windowWidth <= 393
                          ? "opacity-0 fixed z-1"
                          : "rounded-lg"
                      } `}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Image
                      className="ml-[-100px] mt-[750px]"
                      src={card2}
                      alt=""
                    ></Image>
                  )}
                  <h1
                    className={` ${
                      windowWidth <= 393
                        ? "opacity-0 z-1 fixed"
                        : "w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left box-border fixed mt-[260px] ml-[16px]"
                    } `}
                  >
                    Business Tower
                  </h1>
                  <Image
                    className={` ${
                      windowWidth <= 393
                        ? "fixed z-1 opacity-0"
                        : "w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px]"
                    } `}
                    src={localidade}
                    alt=""
                  ></Image>
                </li>
                <li className="w-[378px] relative h-[360px]">
                  <Image
                    src={BTretangular}
                    alt=""
                    fill
                    quality={100}
                    sizes="100vw"
                    className={` fixed ${
                      windowWidth <= 393 ? "opacity-0 fixed z-1" : "rounded-lg"
                    } `}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <h1
                    className={` ${
                      windowWidth <= 393
                        ? "opacity-0 fixed z-1"
                        : "w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left box-border fixed mt-[260px] ml-[16px]"
                    } `}
                  >
                    Business Tower
                  </h1>

                  <Image
                    className={` ${
                      windowWidth <= 393
                        ? "opacity-0 fixed z-1"
                        : "w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px]"
                    } `}
                    src={localidade}
                    alt=""
                  ></Image>
                </li>
              </ul>
              <ul className="flex flex-col gap-[32px]">
                <li className="w-[378px] relative h-[360px]">
                  {windowWidth > 393 ? (
                    <Image
                      src={Prisma}
                      alt=""
                      fill
                      quality={100}
                      sizes="100vw"
                      className={` fixed ${
                        windowWidth <= 393
                          ? "opacity-0 fixed z-1"
                          : "rounded-lg"
                      } `}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Image
                      className="ml-[-510px] mt-[500px]"
                      src={card6}
                      alt=""
                    ></Image>
                  )}
                  <h1
                    className={` ${
                      windowWidth <= 393
                        ? "opacity-0 fixed z-1"
                        : "w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left box-border fixed mt-[260px] ml-[16px]"
                    } `}
                  >
                    Prisma
                  </h1>
                  <Image
                    className={` ${
                      windowWidth <= 393
                        ? "opacity-0 z-1 fixed"
                        : "w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px]"
                    } `}
                    src={localidade}
                    alt=""
                  ></Image>
                </li>
                <li className="w-[378px] relative h-[360px]">
                  <Image
                    src={edhorizonte}
                    alt=""
                    fill
                    quality={100}
                    sizes="100vw"
                    className={` fixed ${
                      windowWidth <= 393 ? "opacity-0 fixed z-1" : "rounded-lg"
                    } `}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <h1
                    className={` ${
                      windowWidth <= 393
                        ? "opacity-0 fixed z-1"
                        : "w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left box-border fixed mt-[260px] ml-[16px]"
                    } `}
                  >
                    Ed. Horizonte
                  </h1>
                  <Image
                    className={` ${
                      windowWidth <= 393
                        ? "opacity-0 fixed z-1"
                        : "w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px]"
                    } `}
                    src={localidade}
                    alt=""
                  ></Image>
                </li>
                <li className="w-[378px] relative h-[360px]">
                  <Image
                    src={parqueavenida}
                    alt=""
                    fill
                    quality={100}
                    sizes="100vw"
                    className={` fixed ${
                      windowWidth <= 393 ? "opacity-0 fixed z-1" : "rounded-lg"
                    } `}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <h1
                    className={` ${
                      windowWidth <= 393
                        ? "opacity-0 fixed z-1"
                        : "w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left fixed mt-[260px] ml-[16px]"
                    } `}
                  >
                    Parque Avenida
                  </h1>

                  <Image
                    className={` ${
                      windowWidth <= 393
                        ? "opacity-0 fixed z-1"
                        : "w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px]"
                    } `}
                    src={localidade}
                    alt=""
                  ></Image>
                </li>
                <li className="w-[378px] relative h-[360px]">
                  <Image
                    src={BTazul}
                    alt=""
                    fill
                    quality={100}
                    sizes="100vw"
                    className={` fixed ${
                      windowWidth <= 393 ? "opacity-0 fixed z-1" : "rounded-lg"
                    } `}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <h1
                    className={` ${
                      windowWidth <= 393
                        ? "opacity-0 fixed z-1"
                        : "w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left fixed mt-[260px] ml-[16px]"
                    } `}
                  >
                    Business Tower
                  </h1>
                  <Image
                    className={` ${
                      windowWidth <= 393
                        ? "opacity-0 fixed z-1"
                        : "w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px]"
                    } `}
                    src={localidade}
                    alt=""
                  ></Image>
                </li>
              </ul>
              <ul className="flex flex-col gap-[32px] mt-[120px]">
                <li className="w-[378px] relative h-[360px]">
                  {windowWidth > 393 ? (
                    <Image
                      src={Mirante}
                      alt=""
                      fill
                      quality={100}
                      sizes="100vw"
                      className={`  ${
                        windowWidth <= 393
                          ? "opacity-0 fixed z-1"
                          : "rounded-lg"
                      } `}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Image
                      className="ml-[-920px] mt-[760px]"
                      src={card1}
                      alt=""
                    ></Image>
                  )}
                  <h1 className="w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left fixed mt-[260px] ml-[16px]">
                    Ed. Mirante
                  </h1>
                  <Image
                    className="w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px]"
                    src={localidade}
                    alt=""
                  ></Image>
                </li>
                <li className="w-[378px] relative h-[360px]">
                  <Image
                    src={BTpiramide}
                    alt=""
                    fill
                    quality={100}
                    sizes="100vw"
                    className={` fixed ${
                      windowWidth <= 393 ? "opacity-0 fixed z-1" : "rounded-lg"
                    } `}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <h1
                    className={` ${
                      windowWidth <= 393
                        ? "opacity-0 fixed z-1"
                        : "w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left fixed mt-[260px] ml-[16px]"
                    } `}
                  >
                    Business Tower
                  </h1>
                  <Image
                    className={` ${
                      windowWidth <= 393
                        ? "opacity-0 fixed z-1"
                        : "w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px]"
                    } `}
                    src={localidade}
                    alt=""
                  ></Image>
                </li>
                <li className="w-[378px] relative h-[360px]">
                  <Image
                    src={BTcinza}
                    alt=""
                    fill
                    quality={100}
                    sizes="100vw"
                    className={` fixed ${
                      windowWidth <= 393 ? "opacity-0 fixed z-1" : "rounded-lg"
                    } `}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <h1
                    className={` ${
                      windowWidth <= 393
                        ? "opacity-0 fixed z-1"
                        : "w-155 h-[45px] text-[32px] font-700 font-visby leading-[44.8px] text-left fixed mt-[260px] ml-[16px]"
                    } `}
                  >
                    Business Tower
                  </h1>
                  <Image
                    className={` ${
                      windowWidth <= 393
                        ? "opacity-0 fixed z-1"
                        : "w-346 h-[20px] gap-[8px] fixed mt-[313px] ml-[16px]"
                    } `}
                    src={localidade}
                    alt=""
                  ></Image>
                </li>
              </ul>
            </div>
          </section>
          <div
            className={` ${
              windowWidth <= 393
                ? "mt-[80px] ml-[-530px] text-[#062665]"
                : "justify-center mt-[8px] text-[#062665]"
            } `}
          >
            <button className={style.button} onClick={toggleExpand}>
              {isExpanded ? "Mostrar menos" : "Mostrar mais"}
            </button>
          </div>
        </section>
      </section>
    );
  };

  return (
    <div>
      <ScrollableList />
    </div>
  );
}
