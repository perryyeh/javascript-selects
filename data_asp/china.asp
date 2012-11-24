<%
db = "china.mdb"
DB="Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" & Server.MapPath(""&DB&"")
Set conn=Server.CreateObject("ADODB.Connection")
conn.open DB

sql = "select distinct Province from PE_City order by Province asc"
set rs=conn.execute(sql)
if not(rs.bof and rs.eof)then
	s="var province=[{data:[['','请选择省/直辖市']"
	do while not rs.eof
		s=s&",'" & rs(0) & "'"
		rs.movenext
	loop
	s=s&"]}];"
end if
response.write s

sql = "select Province,City from PE_City group by Province,City order by Province asc,City asc"
set rs=conn.execute(sql)
if not(rs.bof and rs.eof)then
	s="var city=[{value:'',disabled:true,data:[['','请选择市']"
	p = ""
	c = ""
	do while not rs.eof
		if p = rs(0) then
			s=s & ",'" & rs(1) & "'"
		else
			s=s & "]},{value:'" & rs(0) & "',data:[['','请选择市'],'" & rs(1) & "'"
		end if
		p = rs(0)
		c = rs(1)
		rs.movenext
	loop
	s=s&"]}];"
end if
response.write s

sql = "select City,Area from PE_City group by City,Area order by City asc,area asc"
set rs=conn.execute(sql)
if not(rs.bof and rs.eof)then
	s="var area=[{value:'',disabled:true,data:[['','请选择区']"
	p = ""
	c = ""
	do while not rs.eof
		if p = rs(0) then
			s=s & ",'" & rs(1) & "'"
		else
			s=s & "]},{value:'" & rs(0) & "',data:[['','请选择区'],'" & rs(1) & "'"
		end if
		p = rs(0)
		c = rs(1)
		rs.movenext
	loop
	s=s&"]}];"
end if
response.write s
%>