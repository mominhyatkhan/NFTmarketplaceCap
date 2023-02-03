import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
export const TooltipOnHover = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip
      {...props}
      // PopperProps={{
      //   modifiers: [
      //     {
      //       name: "offset",
      //       options: {
      //         offset: [-10, 0],
      //       },
      //     },
      //   ],
      // }}
      classes={{ popper: className }}
    />
  )
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    // maxWidth: 220,
    width: "180px",
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    padding: "20px 15px",
    // marginTop: "0px !important",
  },
}));
