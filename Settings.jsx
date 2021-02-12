const { React } = require("powercord/webpack");
const { SwitchItem } = require("powercord/components/settings");

module.exports = class Settings extends (
  React.Component
) {
  render() {
    // eslint-disable-next-line react/prop-types
    const { getSetting, toggleSetting } = this.props;
    return (
      <div>
        <SwitchItem
          note="If toggled, commands with potentially NSFW results will be shown."
          value={getSetting("nsfw", false)}
          onChange={() => toggleSetting("nsfw")}
        >
          Allow potentially NSFW commands
        </SwitchItem>
      </div>
    );
  }
};
