namespace fwdSensors {

  export const enum LineSensorState {
    //% block="○"
    Miss = 0,
    //% block="●"
    Hit = 1
  } 

  //% fixedInstances
  export class FwdLineFollowerClient extends modules.ReflectedLightClient {

    constructor(role: string) {
      super(role)
    }

    /**
     * Returns whether or not the line sensor is detecting a reflection
    */
    //% group="Line"
    //% block="$this state"
    //% blockId=fwd_line_sensor_state
    fwdLineSensorState(): LineSensorState { return Math.round(this.brightness()/100) }

    /**
     * Checks for a specific line sensor state
     * @param state ○ (miss) or ● (hit)
    */
    //% group="Line"
    //% block="$this state is $state"
    //% blockId=fwd_line_sensor_state_check
    fwdIsLineSensorState(state: LineSensorState): boolean { return state === this.fwdLineSensorState() }

    /**
     * Runs code when the sensor changes from one state to another
     */
    //% group="Line"
    //% block="on $this state changes"
    //% blockId=fwd_line_sensor_on_state_change
    fwdOnLineSensorStateChange( handler: () => void ): void { this.onReadingChangedBy( 0.50, handler ) }

  }

  //% fixedInstance block="Line 1"
  export const line1 = new FwdLineFollowerClient("Line1?srvo=0");
  //% fixedInstance block="Line 2"
  export const line2 = new FwdLineFollowerClient("Line2?srvo=1");
  //% fixedInstance block="Line 3"
  export const line3 = new FwdLineFollowerClient("Line3?srvo=2");
}
