import { createContext, useContext, useState } from "react"

export const PrefsContext = createContext();

export const usePrefs = () => useContext(PrefsContext);