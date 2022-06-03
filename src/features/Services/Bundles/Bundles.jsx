import React from "react";
import { WriteItem, WriteHeaderItem, WritePrice, WriteHeader, WriteItemIdent } from '../helper';
import '../styles.css';

export default function RusticBundle() {
  return (
    <>
      <div className="service-package list">
        <div className="details">
          <WriteHeader header="Package Deals" />

          <WritePrice price="Rustic Bundle - £100" />
          <WriteHeaderItem description="What's included:" />
          <WriteItem description="Clock order of the day" />
          <WriteItem description="Wood pallet" />
          <WriteItem description="Rustic crate display" />
          <WriteHeaderItem description="More piece's coming soon" />

          <WritePrice price="Welcome Bundle - £75 (plain) or £120 (customised)" />
          <WriteHeaderItem description="What's included:" />
          <WriteItem description="Welcome sign" />
          <WriteItem description="Table plan mirror" />
          <WriteItemIdent description=" - Including one wooden easel" />

          <WritePrice price="Trees, lantern and post box - £100" />
          <WriteHeaderItem description="What's included:" />
          <WriteItem description="2 rose trees" />
          <WriteItem description="6 lanterns" />
          <WriteItem description="Post box" />

        </div>
      </div>
    </>
  );
}
