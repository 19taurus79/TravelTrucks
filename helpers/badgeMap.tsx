import ACBadge from "../assets/ac_badge.svg";
import TVBadge from "../assets/tv.svg";
import BathroomBadge from "../assets/bathroom_badge.svg";
import GasBadge from "../assets/gas_badge.svg";
import KitchenBadge from "../assets/kitchen_badge.svg";
import MicrowaveBadge from "../assets/microwave_badge.svg";
import RadioBadge from "../assets/radio_badge.svg";
import RefrigeratorBadge from "../assets/refrigerator_badge.svg";
import WaterBadge from "../assets/water_badge.svg";

export const badgeMap = [
  { key: "AC", icon: <ACBadge />, label: "AC" },
  { key: "TV", icon: <TVBadge width={20} height={20} />, label: "TV" },
  { key: "bathroom", icon: <BathroomBadge />, label: "Bathroom" },
  { key: "gas", icon: <GasBadge />, label: "Gas" },
  { key: "kitchen", icon: <KitchenBadge />, label: "Kitchen" },
  { key: "microwave", icon: <MicrowaveBadge />, label: "Microwave" },
  { key: "radio", icon: <RadioBadge />, label: "Radio" },
  { key: "refrigerator", icon: <RefrigeratorBadge />, label: "Refrigerator" },
  { key: "water", icon: <WaterBadge />, label: "Water" },
];
