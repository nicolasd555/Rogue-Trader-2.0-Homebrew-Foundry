// Apps
import { PlayerSheet } from "./apps/PlayerSheet.mjs";

const { foundryUtils } = foundry.utils;

Object.defineProperty(
	globalThis,
	`roguetrader`,
	{
		value: foundryUtils({
			Apps: {
				PlayerSheet,
			},
		}),
	},
);
