import { DataFrame, Field } from '@grafana/data';

export interface BarChartDisplayValues {
  /** When the data can not display, this will be returned */
  warn?: string;

  /** All fields joined */
  aligned: DataFrame;

  /**
   * The fields we can display, first field is X axis.
   * This needs to be an array to avoid extra re-initialization in GraphNG
   */
  viz: [DataFrame];

  /** Potentialy color by a field value */
  colorByField?: Field;
}
