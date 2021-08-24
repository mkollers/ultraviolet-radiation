import { UvResponse } from './uv-response';
import * as faker from 'faker';

export class UvResponseMock implements UvResponse {
    result = {
        uv: faker.datatype.number(),
        uv_time: faker.datatype.datetime().toISOString(),
        uv_max: faker.datatype.number(),
        uv_max_time: faker.datatype.datetime().toISOString(),
        ozone: faker.datatype.number(),
        ozone_time: faker.datatype.datetime().toISOString(),
        safe_exposure_time: {
            st1: null,
            st2: null,
            st3: null,
            st4: null,
            st5: null,
            st6: null
        },
        sun_info: {
            sun_times: {
                solarNoon: faker.datatype.datetime().toISOString(),
                nadir: faker.datatype.datetime().toISOString(),
                sunrise: faker.datatype.datetime().toISOString(),
                sunset: faker.datatype.datetime().toISOString(),
                sunriseEnd: faker.datatype.datetime().toISOString(),
                sunsetStart: faker.datatype.datetime().toISOString(),
                dawn: faker.datatype.datetime().toISOString(),
                dusk: faker.datatype.datetime().toISOString(),
                nauticalDawn: faker.datatype.datetime().toISOString(),
                nauticalDusk: faker.datatype.datetime().toISOString(),
                nightEnd: faker.datatype.datetime().toISOString(),
                night: faker.datatype.datetime().toISOString(),
                goldenHourEnd: faker.datatype.datetime().toISOString(),
                goldenHour: faker.datatype.datetime().toISOString(),
            },
            sun_position: {
                azimuth: faker.datatype.number(),
                altitude: faker.datatype.number()
            }
        }
    };
}