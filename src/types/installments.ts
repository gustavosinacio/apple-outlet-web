import { defaultConfig } from "config/initialConfig";

export type IInstallment = (typeof defaultConfig.installments)[0];

export interface FeesSnapshotData {
  fees: IInstallment[];
  embededTexts: string[];
}
