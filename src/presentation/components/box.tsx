import { useTheme } from "@emotion/react";
import { FC } from "react";
import { FaCheck } from "react-icons/fa";
// Define interface for props
interface BoxProps {
  title: string;
  component: string;
}

// Functional component with TypeScript
const Box: FC<BoxProps> = ({ title, component }) => {
  const theme = useTheme();
  return (
    <div
      style={{
        flex: 1,
        boxShadow: "-1px 3px 16px 0px #959DA530",
        minHeight: "140px",
        minWidth: "244px",
        border: "1px solid #f0f0f0",
        padding: "24px",
      }}
    >
      <div
        style={{
          backgroundColor: theme.color.green.default,
          width: "30px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          borderRadius: "20px",
          marginBottom: "10px",
        }}
      >
        <FaCheck
          color="white"
          style={{
            textAlign: "center",
            verticalAlign: "middle",
            marginTop: "6px",
          }}
        />
      </div>

      <h2
        style={{
          marginBottom: "10px",
          color: "#33384F",
          fontWeight: "700",
          fontSize: "14px",
        }}
      >
        {title}
      </h2>
      <p style={{ marginBottom: "10px", fontSize: "12px", fontWeight: "400" }}>
        {component}
      </p>
    </div>
  );
};

export default Box;
