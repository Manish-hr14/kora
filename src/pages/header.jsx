import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import Table from "./table";
import Pagination from "./footer";
import Enrobrn from "./enrolBtn";

const Component1 = ({ dropBtn}) => {
  return (
    <form className="m-0 w-full relative overflow-hidden flex flex-col items-start justify-start gap-[7.5px] tracking-[normal]">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[35.7px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[11.5px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start pt-[5px] px-0 pb-[4.9px]">
            <div className="w-[219px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border">
              <div className="flex-1 flex flex-row items-start justify-start gap-[14px]">
                <h2 className="m-0 relative text-5xl font-bold font-pretendard text-dark-11 text-left inline-block min-w-[83px] mq450:text-lgi">
                  회원상세
                </h2>
                <div className="flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0">
                  <div className="flex flex-row items-start justify-start gap-[4px]">
                    <div className="h-1.5 w-1.5 relative rounded-[50%] bg-input-form-error" />
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <div className="relative text-sm font-medium font-pretendard text-input-form-error text-left inline-block min-w-[49px] whitespace-nowrap">
                        필수항목
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro" />
          <div className="self-stretch rounded-lg flex flex-row items-start justify-start pt-0 pb-[0.5px] pr-px pl-0 [row-gap:20px] mq1025:flex-wrap">
            <Button
              className="h-[39px] flex-1 min-w-[84px]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#b1b4bb",
                fontSize: "16",
                background: "#ebeef3",
                borderRadius: "8px 0px 0px 8px",
                "&:hover": { background: "#ebeef3" },
              }}
            >
              기본정보 관리
            </Button>
            <Button
              className="h-[39px] flex-1 min-w-[84px]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#2a3958",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#2a3958" },
              }}
            >
              투자유형 관리
            </Button>
            <button className="cursor-pointer [border:none] py-2.5 px-[14.5px] bg-aliceblue flex flex-row items-start justify-start whitespace-nowrap hover:bg-lightgray">
              <div className="relative text-base font-pretendard text-input-form-completed text-center inline-block min-w-[101px] whitespace-nowrap">
                입출금내역 조회
              </div>
            </button>
            <Button
              className="h-[39px] flex-1 min-w-[84px]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#b1b4bb",
                fontSize: "16",
                background: "#ebeef3",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#ebeef3" },
              }}
            >
              영업내역 조회
            </Button>
            <Button
              className="h-[39px] flex-1 min-w-[84px]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#b1b4bb",
                fontSize: "16",
                background: "#ebeef3",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#ebeef3" },
              }}
            >
              투자내역 조회
            </Button>
            <Button
              className="h-[39px] flex-1 min-w-[84px]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#b1b4bb",
                fontSize: "16",
                background: "#ebeef3",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#ebeef3" },
              }}
            >
              채권내역 조회
            </Button>
            <Button
              className="h-[39px] flex-[0.7816] min-w-[84px] mq450:flex-1"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#b1b4bb",
                fontSize: "16",
                background: "#ebeef3",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#ebeef3" },
              }}
            >
              SMS 관리
            </Button>
            <Button
              className="h-[39px] flex-1 min-w-[84px]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#b1b4bb",
                fontSize: "16",
                background: "#ebeef3",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#ebeef3" },
              }}
            >
              상담내역 관리
            </Button>
            <button className="cursor-pointer [border:none] py-2.5 px-3 bg-aliceblue rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none flex flex-row items-start justify-start whitespace-nowrap hover:bg-lightgray">
              <div className="relative text-base font-pretendard text-input-form-completed text-center inline-block min-w-[106px] whitespace-nowrap">
                1:1문의내역 조회
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-end justify-start py-0 px-0 box-border gap-[12.7px] max-w-full">
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-0 box-border max-w-full gap-[20px] mq750:flex-wrap">
          <div className="flex flex-row items-center justify-start py-0 pr-[9px] pl-0 gap-[8px]">
            <h3 className="m-0 relative text-xl font-semibold font-pretendard text-dark-11 text-left inline-block min-w-[74px] mq450:text-base">
              신청 목록
            </h3>
            <div className="relative text-sm font-medium font-pretendard text-left">
              <span className="text-dimgray">(총 100명 | 승인대기</span>
              <span className="text-input-form-error">{` `}</span>
              <span className="text-input-form-error">
                <span className="[text-decoration:underline]">1</span>
              </span>
              <span className="text-dimgray">건)</span>
            </div>
          </div>

          <div className="w-[458.4px] flex flex-row items-start justify-start gap-[4px] max-w-full mq450:flex-wrap">

            <div>{dropBtn}</div>

            <FormControl
              className="h-[39px] flex-1 font-pretendard text-base text-dark-11 min-w-[112px] w-auto"
              variant="standard"
              sx={{
                borderColor: "#b1b4bb",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "32.74432809773124%",
                height: "39px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "39px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "39px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "39px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "39px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#0b101a",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Pretendard",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "12px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="11.2px"
                    height="6.6px"
                    src="/vector-3.svg"
                    style={{ marginRight: "11.89999999999991px" }}
                  />
                )}
              >
                <MenuItem>신청일시순</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <FormControl
              className="h-[39px] flex-1 font-pretendard text-base text-dark-11 min-w-[112px] w-auto"
              variant="standard"
              sx={{
                borderColor: "#b1b4bb",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "32.74432809773124%",
                height: "39px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "39px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "39px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "39px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "39px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#0b101a",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Pretendard",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "12px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="11.2px"
                    height="6.6px"
                    src="/vector-3.svg"
                    style={{ marginRight: "11.89999999999991px" }}
                  />
                )}
              >
                <MenuItem>50개씩 보기</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro" />
        <div className="w-[351.1px] flex flex-row items-center justify-start py-0 pr-0 pl-5 box-border gap-[16px] max-w-full">
          <div className="relative text-sm font-medium font-pretendard text-dimgray text-left inline-block min-w-[61px]">
            선택한 0건
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[4px]">
            <FormControl
              className="h-[39px] flex-1 font-pretendard text-base text-dark-11 w-auto"
              variant="standard"
              sx={{
                borderColor: "#b1b4bb",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "59.07123179850452%",
                height: "39px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "39px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "39px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "39px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "39px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#0b101a",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Pretendard",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "12px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="11.2px"
                    height="6.6px"
                    src="/vector-3.svg"
                    style={{ marginRight: "11.89999999999991px" }}
                  />
                )}
              >
                <MenuItem>승인상태 변경</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className="w-[100px] rounded-3xs bg-primary-main flex flex-row items-center justify-center py-2.5 px-4 box-border">
              <div className="flex-1 relative text-base font-semibold font-pretendard text-neutral-1 text-center">
                저장
              </div>
            </div>
          </div>
        </div>
      </section>
      <Enrobrn />
      <Table />
      <Pagination />
    </form>
  );
};

export default Component1;
