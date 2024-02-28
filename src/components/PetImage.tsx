import { Box } from "@mui/material";

type PetImageProps = {
  image: string;
  size?: string;
};

const PetImage = ({ image, size = "60px" }: PetImageProps) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={image}
      />
    </Box>
  );
};

export default PetImage;
