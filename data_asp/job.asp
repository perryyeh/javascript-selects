<%
db = "job.mdb"
DB="Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" & Server.MapPath(""&DB&"")
Set conn=Server.CreateObject("ADODB.Connection")
conn.open DB

sql = "select anclassidorder,anclass from anclass order by anclassidorder asc"
set rs=conn.execute(sql)
if not(rs.bof and rs.eof)then
	s="var jobsort=[{data:[['','请选择职位类别']"
	do while not rs.eof
		s=s&",'" & rs(1) & "'"
		rs.movenext
	loop
	s=s&"]}];"
end if
response.write s

sql = "select nclass.nclassid,nclass.nclass,nclass.anclassid,anclass.anclass from nclass,anclass where nclass.anclassid=anclass.anclassidorder order by nclass.anclassid asc,nclass.nclassidorder asc"
set rs=conn.execute(sql)
if not(rs.bof and rs.eof)then
	s="var jobname=[{value:'',disabled:true,data:[['','请选择职位名称']"
	p = ""
	do while not rs.eof
		if p = rs(2) then
			s=s & ",'" & rs(1) & "'"
		else
			s=s & "]},{value:'" & rs(3) & "',data:[['','请选择职位名称'],'" & rs(1) & "'"
		end if
		p = rs(2)
		rs.movenext
	loop
	s=s&"]}];"
end if
response.write s
%>