export default function StickerDisplay({ displayType }) {
  return (
    <div
      style={{
        height: "300px",
        width: "280px",
        backgroundColor: "gray",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "200px",
        }}
      >
        <img
          src="https://placehold.co/600x400"
          alt="Image Placeholder"
          style={{ width: "220px", height: "auto" }}
        />
      </div>

      <div style={{ paddingLeft: "30px" }}>title</div>
      <div style={{ paddingLeft: "30px" }}>Description</div>
    </div>
  );
}
