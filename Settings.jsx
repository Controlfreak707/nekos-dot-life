import { React } from "powercord/webpack";
import { SwitchItem } from "powercord/components/settings";

export default class Settings extends (
  React.Component
) {
  render() {
    const { getSetting, toggleSetting } = this.props;
    return (
      <div>
        <SwitchItem
          note="If enabled, commands with potentially NSFW results will be shown."
          value={getSetting("nsfw", false)}
          onChange={() => toggleSetting("nsfw")}
        >
          Allow potentially NSFW commands
        </SwitchItem>
      </div>
    );
  }
};
