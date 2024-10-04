"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  //   ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StreamData } from "@/lib/types";
import { Separator } from "../ui/separator";

const recentStreams = [
  {
    song: "Mad Love",
    artist: "Mable",
    date: "2024-09-29",
    streamCount: 1500,
    userId: "user_001",
  },
  {
    song: "Blinding Lights",
    artist: "The Weeknd",
    date: "2024-09-28",
    streamCount: 2500,
    userId: "user_002",
  },
  {
    song: "Levitating",
    artist: "Dua Lipa",
    date: "2024-09-27",
    streamCount: 1200,
    userId: "user_003",
  },
  {
    song: "Watermelon Sugar",
    artist: "Harry Styles",
    date: "2024-09-26",
    streamCount: 1800,
    userId: "user_004",
  },
  {
    song: "Shape of You",
    artist: "Ed Sheeran",
    date: "2024-09-25",
    streamCount: 3000,
    userId: "user_005",
  },
  {
    song: "Good 4 U",
    artist: "Olivia Rodrigo",
    date: "2024-09-24",
    streamCount: 2100,
    userId: "user_006",
  },
  {
    song: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    date: "2024-09-23",
    streamCount: 3200,
    userId: "user_007",
  },
  {
    song: "Peaches",
    artist: "Justin Bieber",
    date: "2024-09-22",
    streamCount: 2800,
    userId: "user_008",
  },
  {
    song: "drivers license",
    artist: "Olivia Rodrigo",
    date: "2024-09-21",
    streamCount: 2700,
    userId: "user_009",
  },
  {
    song: "Save Your Tears",
    artist: "The Weeknd",
    date: "2024-09-20",
    streamCount: 1900,
    userId: "user_010",
  },
  {
    song: "Deja Vu",
    artist: "Olivia Rodrigo",
    date: "2024-09-19",
    streamCount: 2200,
    userId: "user_011",
  },
  {
    song: "Montero (Call Me By Your Name)",
    artist: "Lil Nas X",
    date: "2024-09-18",
    streamCount: 3400,
    userId: "user_012",
  },
  {
    song: "Butter",
    artist: "BTS",
    date: "2024-09-17",
    streamCount: 4500,
    userId: "user_013",
  },
  {
    song: "Kiss Me More",
    artist: "Doja Cat ft. SZA",
    date: "2024-09-16",
    streamCount: 2600,
    userId: "user_014",
  },
  {
    song: "Levitating (feat. DaBaby)",
    artist: "Dua Lipa",
    date: "2024-09-15",
    streamCount: 3500,
    userId: "user_015",
  },
];

const columns: ColumnDef<StreamData>[] = [
  {
    accessorKey: "artist",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Artist
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("artist")}</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "song",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Song
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("song")}</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("date")}</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "streamCount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Stream Count
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const streamCount = row.getValue("streamCount");
      return <div className="text-center">{streamCount as string}</div>;
    },
    enableSorting: true,
  },
  {
    accessorKey: "userId",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        UserID
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const streamCount = row.getValue("userId");
      return <div className="text-center">{streamCount as string}</div>;
    },
    enableSorting: true,
  },
];

export function RecentStreamsTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState<string>("");

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  //   const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: recentStreams,
    columns,
    onSortingChange: setSorting,
    globalFilterFn: (row, columnIds, filterValue) => {
      const artist = row.getValue("artist") || "";
      const song = row.getValue("song") || "";
      return (
        artist.toLowerCase().includes(filterValue.toLowerCase()) ||
        song.toLowerCase().includes(filterValue.toLowerCase())
      );
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,

    state: {
      sorting,
      globalFilter,
      columnVisibility,
      //   rowSelection,
    },
  });

  return (
    <div className="col-span-6">
      <Separator className="my-6"></Separator>
      <h2 className="text-xl font-bold">Recent Streams</h2>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by Artist or Song..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-center">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-left">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
