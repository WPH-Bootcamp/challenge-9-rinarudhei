"use client";

import { store } from "@/services/stores/store";
import React from "react";
import { Provider } from "react-redux";
import { TanstackProvider } from "./tanstack-provider";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

type ClientProviderProps = {
  children: React.ReactNode;
};
export const ClientProvider = ({ children }: ClientProviderProps) => {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TanstackProvider>{children}</TanstackProvider>
      </PersistGate>
    </Provider>
  );
};
