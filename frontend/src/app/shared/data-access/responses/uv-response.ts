export interface UvResponse {
    result: {
        uv: number;
        uv_time: string;
        uv_max: number;
        uv_max_time: string;
        ozone: number;
        ozone_time: string;
        safe_exposure_time: {
            st1: null | unknown;
            st2: null | unknown;
            st3: null | unknown;
            st4: null | unknown;
            st5: null | unknown;
            st6: null | unknown;
        };
        sun_info: {
            sun_times: {
                solarNoon: string;
                nadir: string;
                sunrise: string;
                sunset: string;
                sunriseEnd: string;
                sunsetStart: string;
                dawn: string;
                dusk: string;
                nauticalDawn: string;
                nauticalDusk: string;
                nightEnd: string;
                night: string;
                goldenHourEnd: string;
                goldenHour: string;
            };
            sun_position: {
                azimuth: number;
                altitude: number;
            };
        };
    }
}