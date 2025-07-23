import { builderReducer } from "./builder/builder.slice";
import { combineSlices } from "@reduxjs/toolkit";

export const rootReducer = combineSlices({
    builder: builderReducer,
});
