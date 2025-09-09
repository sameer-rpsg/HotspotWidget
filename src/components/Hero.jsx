import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "@/components/Home.module.css";


const Hero = ({
  heroImg,
  position,
  breadcrumbs,
  altName,
  caption,
  courtesy,
}) => {
  return (
    <section id="stories-banner" className={style.storiesBanner}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <div
              className={`${style.heroCarousal} ${style.template1CustomHeight}`}
            >
              <div className={style.heroImgCnt}>
                <div className={style.posRelFull}>
                  <div
                    className={`${style.hoverDiv} ${style.template1CustomHeight}`}
                  >
                    <img src="https://www.mercedes-benz.com/content/dam/brandhub/assets/vehicles/glc/teaser/09-2025/images/mercedes-benz-glc-x540-bev-landing-page-teaser-switcher-01-3840x2160-09-2025.jpg/_jcr_content/renditions/image-crop-default.jpeg/1757320074331.jpg?im=Resize=(820);Crop,rect=(0,0,820,461)" alt="" />
                    {/* <Image
                      src={heroImg ?? ""}
                      fill
                      alt={altName ?? "Articles Banner"}
                      priority={true}
                    /> */}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className={style.photoBy}>
              {/* {caption && (
                <span className={style.caption}>
                  {hasHtmlTags(caption) ? htmlParser(caption) : caption}
                </span>
              )}
              {courtesy && (
                <span className={style.courtesy}>
                  {hasHtmlTags(courtesy) ? htmlParser(courtesy) : courtesy}
                </span>
              )} */}
              <span className={style.courtesy}>Mercedes-Benz GLC</span>
            </div>
            {/* <StaticAds
              adUnits={[
                {
                  adPath: "/super-leaderboard-ad.jpeg",
                  adSize: [970, 90],
                  minWidth: 1024,
                  maxWidth: Infinity,
                },
                {
                  adPath: "/super-leaderboard-ad.jpeg",
                  adSize: [728, 90],
                  minWidth: 768,
                  maxWidth: 1023,
                },
                {
                  adPath: "/leaderboard-ad.png",
                  adSize: [300, 250],
                  minWidth: 0,
                  maxWidth: 767,
                },
              ]}
            /> */}
            <ol className={style.breadcrum}>
              {/* {breadcrumbs?.map((item, i) => {
                return (
                  <li className={style.breadcrumItem} key={`breadcrumbs-${i}`}>
                    <Link href={Const.ClientLink + item?.slug ?? "#"}>
                      <span style={{ textDecoration: "underline" }}>
                        {item?.name ?? ""}
                      </span>
                    </Link>
                  </li>
                );
              })} */}
              <li className={style.breadcrumItem}>
                <Link href={""} style={{ textDecoration: "underline" }}>
                <span>
                  Tech & Auto</span></Link>
              </li>
              <li className={style.breadcrumItem}>
                <Link href={""} style={{ textDecoration: "underline" }}>
                <span>
                  Cars & Bikes</span></Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
