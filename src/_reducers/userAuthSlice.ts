import { profileApi } from "@/_services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// INIT
const initialState: any = {
  data: {},
  status: "idle",
  error: null,
};

// CREATE SLICE
export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,

  // ACTION
  reducers: {
    add: (state, action: PayloadAction<Object>) => {},
    update: (state, action: PayloadAction<Object>) => {},
    remove: (state, action: PayloadAction<Object>) => {},
  },

  // CALL API
  extraReducers: (builder) => {
    builder

      // LOADING
      .addCase(fetchUserAuth.pending, (state, action) => {
        state.status = "loading";
        // console.log(`loading`);
      })

      // SUCCESS
      .addCase(fetchUserAuth.fulfilled, (state, action) => {
        state.status = "succeeded";

        // PUSH TO DATA STATE
        state.data = {
          email: action.payload.email,
          phone: action.payload.phone,
          fullName: action.payload.fullName,
          avatar: action.payload.avatar,
          status: action.payload.status,
        };
      })

      // FAILURE
      .addCase(fetchUserAuth.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// FETCH CHAT LIST
export const fetchUserAuth = createAsyncThunk("fetchUserAuth", async () => {
  const { data } = await profileApi();
  console.log(data);

  return data.data;
});

export const { add, update, remove } = userAuthSlice.actions;

export default userAuthSlice.reducer;
