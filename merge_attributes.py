import json
import sys


def merge_attributes(json_file, target_attribute, source_attributes):
    """Merges source attributes into a target attribute in a JSON array.

    Args:
        json_file: Path to the JSON file.
        target_attribute: Name of the target attribute to create or modify.
        source_attributes: List of source attribute names to merge.

    Returns:
        The modified JSON array as a string.
    """

    try:
        with open(json_file, "r") as f:
            data = json.load(f)

        if not isinstance(data, list):
            raise ValueError("Input JSON must be an array.")

        for item in data:
            item[target_attribute] = ", ".join(
                item.get(attr, "") for attr in source_attributes
            )

        return json.dumps(data)
    except (json.JSONDecodeError, ValueError) as e:
        print(f"Error: {e}")
        return None


if __name__ == "__main__":
    if len(sys.argv) < 4:
        print(
            "Usage: python script.py <json_file> <target_attribute> <source_attribute1> <source_attribute2> ..."
        )
        sys.exit(1)

    json_file = sys.argv[1]
    target_attribute = sys.argv[2]
    source_attributes = sys.argv[3:]

    result = merge_attributes(json_file, target_attribute, source_attributes)

    if result:
        print(result)
    else:
        print("Error occurred during processing.")
