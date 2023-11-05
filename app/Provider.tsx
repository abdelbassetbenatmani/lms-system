import { Provider } from "react-redux";
import { FC } from "react";
import store from "@/Redux/Store";

interface Props {
    children: any;
}
export const ReduxProvider: FC<Props> = ({ children }:Props) => {
    return <Provider store={store}>{children}</Provider>;
};