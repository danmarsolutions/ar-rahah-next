import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PackageSelect() {
  return (
    <Select>
      <SelectTrigger className="rounded-xl w-full sm:w-fit sm:min-w-[180px] !h-fit border-2 text-lg py-3 px-5">
        <SelectValue
          className="text-black"
          placeholder="See more details"
        />
      </SelectTrigger>
      <SelectContent className="text-lg">
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
}
