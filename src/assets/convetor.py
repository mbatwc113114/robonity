from PIL import Image
import os

def convert_pngs_to_webp(directory="."):
    """
    Converts all PNG images in the specified directory to WebP format.

    Args:
        directory (str): The path to the directory containing the PNG images.
                         Defaults to the current directory.
    """
    if not os.path.isdir(directory):
        print(f"Error: Directory '{directory}' not found.")
        return

    for filename in os.listdir(directory):
        if filename.lower().endswith(".png"):
            png_filepath = os.path.join(directory, filename)
            # Create the new filename with .webp extension
            webp_filename = os.path.splitext(filename)[0] + ".webp"
            webp_filepath = os.path.join(directory, webp_filename)

            try:
                with Image.open(png_filepath) as img:
                    img.save(webp_filepath, "WEBP")
                print(f"Converted '{filename}' to '{webp_filename}'")
            except Exception as e:
                print(f"Error converting '{filename}': {e}")

if __name__ == "__main__":
    # You can specify the directory here, or it will default to the current one.
    # For example, to convert images in a subfolder named 'my_images':
    # convert_pngs_to_webp("my_images")
    convert_pngs_to_webp()