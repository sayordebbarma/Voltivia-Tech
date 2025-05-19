import SolarInverter1 from "../assets/products/solarInverter/solarInverter1.png";
import SolarInverter2 from "../assets/products/solarInverter/solarInverter2.png";
import SolarInverter3 from "../assets/products/solarInverter/solarInverter3.png";
import SolarInverter4 from "../assets/products/solarInverter/solarInverter4.jpg";
import SolarInverter5 from "../assets/products/solarInverter/solarInverter5.png";
import Ups1 from "../assets/products/ups/ups1.png";
import Ups2 from "../assets/products/ups/ups2.png";
import ServoStabilizer1 from "../assets/products/servoStabilizer/servoStabilizer1.png";

export const products = [
    {
        id: "solar-inverter",
        name: "Solar Inverter",
        description: "High Efficiency Solar Power Conversion",
        specifications: {
            capacity: "5kW Capacity",
            technology: "MPPT Technology",
            systemType: "Grid-Tied System"
        },
        images: [
            SolarInverter1,
            SolarInverter2,
            SolarInverter3,
            SolarInverter4,
            SolarInverter5
        ],
        category: "Power Conversion"
    },
    {
        id: "online-ups",
        name: "Online UPS",
        description: "Uninterrupted Power Supply",
        specifications: {
            rating: "3kVA Rating",
            technology: "Double Conversion",
            outputType: "Pure Sine Wave"
        },
        images: [
            Ups1,
            Ups2
        ],
        category: "Power Backup"
    },
    {
        id: "servo-stabilizer",
        name: "Servo Stabilizer",
        description: "Voltage Regulation System",
        specifications: {
            rating: "10kVA Rating",
            features: "Auto Voltage Correction",
            display: "Digital Display"
        },
        images: [ServoStabilizer1],
        category: "Voltage Control"
    }
]; 